import { render } from '@testing-library/react';

import Icon112 from './icon112';

describe('Icon112', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon112 />);
    expect(baseElement).toBeTruthy();
  });
});
