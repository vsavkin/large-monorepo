import { render } from '@testing-library/react';

import ImportantComponent92 from './important-component-92';

describe('ImportantComponent92', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImportantComponent92 />);
    expect(baseElement).toBeTruthy();
  });
});
