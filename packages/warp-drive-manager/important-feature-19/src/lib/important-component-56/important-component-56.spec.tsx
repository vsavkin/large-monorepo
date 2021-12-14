import { render } from '@testing-library/react';

import ImportantComponent56 from './important-component-56';

describe('ImportantComponent56', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent56 />);
    expect(baseElement).toBeTruthy();
  });
});
