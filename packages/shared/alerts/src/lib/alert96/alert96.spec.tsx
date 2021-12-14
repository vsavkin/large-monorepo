import { render } from '@testing-library/react';

import Alert96 from './alert96';

describe('Alert96', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Alert96 />);
    expect(baseElement).toBeTruthy();
  });
});
