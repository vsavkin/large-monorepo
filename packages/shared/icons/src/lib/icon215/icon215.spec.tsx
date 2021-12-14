import { render } from '@testing-library/react';

import Icon215 from './icon215';

describe('Icon215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon215 />);
    expect(baseElement).toBeTruthy();
  });
});
