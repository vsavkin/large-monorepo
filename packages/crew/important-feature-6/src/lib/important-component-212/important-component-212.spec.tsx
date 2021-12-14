import { render } from '@testing-library/react';

import ImportantComponent212 from './important-component-212';

describe('ImportantComponent212', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent212 />);
    expect(baseElement).toBeTruthy();
  });
});
