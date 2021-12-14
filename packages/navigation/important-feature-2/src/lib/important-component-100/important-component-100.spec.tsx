import { render } from '@testing-library/react';

import ImportantComponent100 from './important-component-100';

describe('ImportantComponent100', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent100 />);
    expect(baseElement).toBeTruthy();
  });
});
