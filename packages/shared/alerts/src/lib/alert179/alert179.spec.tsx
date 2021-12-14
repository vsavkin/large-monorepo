import { render } from '@testing-library/react';

import Alert179 from './alert179';

describe('Alert179', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert179 />);
    expect(baseElement).toBeTruthy();
  });
});
