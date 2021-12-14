import { render } from '@testing-library/react';

import ImportantComponent215 from './important-component-215';

describe('ImportantComponent215', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent215 />);
    expect(baseElement).toBeTruthy();
  });
});
