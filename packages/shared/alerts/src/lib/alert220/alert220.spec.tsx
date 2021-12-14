import { render } from '@testing-library/react';

import Alert220 from './alert220';

describe('Alert220', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert220 />);
    expect(baseElement).toBeTruthy();
  });
});
