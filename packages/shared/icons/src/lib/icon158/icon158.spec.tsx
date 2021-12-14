import { render } from '@testing-library/react';

import Icon158 from './icon158';

describe('Icon158', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon158 />);
    expect(baseElement).toBeTruthy();
  });
});
