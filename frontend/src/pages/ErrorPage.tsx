import { HStack, Stack } from '@/components/layout/Stack'
import { Button, Code, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { useNavigate, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    let error = useRouteError();

    const errorDueToUpdate = (error as Error).message?.includes('Failed to fetch dynamically imported module:')

    const navigate = useNavigate()

    const reloadPage = () => {
        navigate(0)
    }

    const goToChannels = () => {
        navigate('/channel')
    }

    return (
        <Flex className='h-screen w-screen bg-gray-2' align='center' justify='center'>
            <Stack gap='4'>
                <Heading as='h1' size='5' className='text-center not-cal'>{errorDueToUpdate ?
                    "A new update is available." :
                    "There was an unexpected error."}
                </Heading>
                <Text>If you face this error again, please report it either on <Link target='_blank' href='https://github.com/frappe/raven/issues'>GitHub</Link> or <Link target='_blank' href='https://https://support.ravenchat.ai/'> our support portal</Link>.</Text>

                <details>
                    <summary><Text size='2'>Show error details</Text></summary>
                    <Code color='gray'>{(error as Error).message}</Code>
                </details>
                <HStack justify='center'>
                    <Button
                        // variant='ghost'
                        variant='soft'
                        size='2'
                        color='gray'
                        className='not-cal'
                        onClick={reloadPage}>
                        Reload the Page
                    </Button>
                    <Button
                        // variant='ghost' 
                        variant='soft'
                        color='gray'
                        size='2' className='not-cal' onClick={goToChannels}>
                        Back to Channels
                    </Button>
                </HStack>

            </Stack>
        </Flex>
    )
}

export default ErrorPage