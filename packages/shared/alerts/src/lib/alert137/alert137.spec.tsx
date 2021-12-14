import { render } from '@testing-library/react';

import Alert137 from './alert137';

describe('Alert137', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert137 />);
    expect(baseElement).toBeTruthy();
  });
});
