import { render } from '@testing-library/react';

import Icon73 from './icon73';

describe('Icon73', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon73 />);
    expect(baseElement).toBeTruthy();
  });
});
