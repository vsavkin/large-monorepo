import { render } from '@testing-library/react';

import Icon116 from './icon116';

describe('Icon116', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon116 />);
    expect(baseElement).toBeTruthy();
  });
});
