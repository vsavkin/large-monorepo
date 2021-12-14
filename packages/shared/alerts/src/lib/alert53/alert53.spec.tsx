import { render } from '@testing-library/react';

import Alert53 from './alert53';

describe('Alert53', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert53 />);
    expect(baseElement).toBeTruthy();
  });
});
