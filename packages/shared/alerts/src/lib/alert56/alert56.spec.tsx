import { render } from '@testing-library/react';

import Alert56 from './alert56';

describe('Alert56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert56 />);
    expect(baseElement).toBeTruthy();
  });
});
